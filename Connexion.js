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
} from "./componants/styles";
import {View} from "react-native";
import {StatusBar} from 'expo-status-bar';

//formik
import {Formik} from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//Couleurs
const {brand, darkLight, primary} = Colors;


const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
          {/*<PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')}/>*/}
          <PageTitle>Deventce</PageTitle>

          <Formik initialValues={{email: '', password: ''}} onSubmit={(values) => {
            console.log(values);
            {/*navigation.navigate('Signup');*/}
          }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
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


              <StyledButton onPress={handleSubmit}>
                <ButtonText>Connexion</ButtonText>
              </StyledButton>
            </StyledFormArea>)}
          </Formik>
        </InnerContainer>
      </StyledContainer>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={primary}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
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

export default Login;