import React, {useState} from "react";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from "./componants/styles"
import {View, TouchableOpacity} from "react-native";
import {StatusBar} from 'expo-status-bar';

//formik
import {Formik} from "formik";

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//Couleurs
const {brand, darkLight, primary} = Colors;

const Signup = (navigation) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  //Vrai date de naissance à envoyer
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }
  return (
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
          {/*<PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')}/>*/}
          <PageTitle>DEVENTCE</PageTitle>

          <Formik initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                  onSubmit={(values) => {
                    console.log(values);
                  }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
              <MyTextInput
                  icon="person"
                  placeholder="Prénom"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
              />

              <MyTextInput
                  icon="mail"
                  placeholder="Adresse email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
              />
              <MyTextInput
                  placeholder="Mot de passe"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
              />

              <MyTextInput
                  placeholder="Confirmez le mot de passe"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
              />

              {/*<MsgBox>...</MsgBox>*/}

              <StyledButton onPress={handleSubmit}>
                <ButtonText>Inscription</ButtonText>
              </StyledButton>

              <ExtraView>
                <ExtraText>Déjà inscrit ? </ExtraText>
                <TextLink>
                  <TextLinkContent>Se connecter</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>)}
          </Formik>
        </InnerContainer>
      </StyledContainer>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
  return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={primary}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        {!isDate && <StyledTextInput {...props} />}
        {isDate && <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>}
        {isPassword && (
            <RightIcon
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
            >
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
            </RightIcon>
        )}
      </View>
  );
};

export default Signup;