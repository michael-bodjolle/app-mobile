import React, { useState } from "react";
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
  TextLinkContent,
} from "./componants/styles";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { create } from "./services/UserAPI";
import { NavigationActions } from "react-navigation";

//formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//Couleurs
const { brand, darkLight, primary } = Colors;

const Signup = (props) => {
  console.log(props);
  const [hidePassword, setHidePassword] = useState(true);
  // const [show, setShow] = useState(false);
  // const [date, setDate] = useState(new Date(2000, 0, 1));

  //Vrai date de naissance à envoyer
  const [values, setValues] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(values);

  // const [alert, setAlert] = useState({ isOpen: false, type: '', message: '' })

  // const handleChange = (e) => {
  //   console.log(e);
  //   // setValues({ ...values, [prop]: event.target.value });
  // };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      console.log(values);
      if (
        values.name.length > 0 &&
        values.firstname.length > 0 &&
        values.email.length > 0 &&
        values.password.length > 0
      ) {
        console.log("test");
        const data = create(
          values.name,
          values.firstname,
          values.email,
          values.password
        );

        const routeName = "Connexion";
        props.props.navigation.navigate(routeName);
        //   console.log(data);
        //   // setInfoUser(values);
      }
      // else {
      //   setAlert({ isOpen: true, type: 'error', message: 'Veuillez remplir tous les champs' })
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <StyledContainer>
        <StatusBar style="dark" />

        <InnerContainer>
          {/*<PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')}/>*/}
          <PageTitle>DEVENTCE</PageTitle>

          <Formik onSubmit={handleSubmit}>
            {({ handleBlur }) => (
              <StyledFormArea>
                <MyTextInput
                  icon="person"
                  placeholder="Nom"
                  placeholderTextColor={darkLight}
                  onChangeText={(e) => {
                    console.log(values);
                    setValues({ ...values, name: e });
                    console.log(e);
                  }}
                  onBlur={handleBlur("name")}
                />
                <MyTextInput
                  icon="person"
                  placeholder="Prenom"
                  placeholderTextColor={darkLight}
                  onChangeText={(e) => {
                    setValues({ ...values, firstname: e });
                    console.log(e);
                  }}
                  onBlur={handleBlur("firstname")}
                />

                <MyTextInput
                  icon="mail"
                  placeholder="Adresse email"
                  placeholderTextColor={darkLight}
                  onChangeText={(e) => {
                    setValues({ ...values, email: e });
                    console.log(e);
                  }}
                  onBlur={handleBlur("mail")}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Mot de passe"
                  placeholderTextColor={darkLight}
                  onChangeText={(e) => {
                    setValues({ ...values, password: e });
                    console.log(e);
                  }}
                  onBlur={handleBlur("password")}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MyTextInput
                  placeholder="Confirmez le mot de passe"
                  placeholderTextColor={darkLight}
                  onChangeText={(e) => {
                    setValues({ ...values, confirmPassword: e });
                  }}
                  onBlur={handleBlur("confirmPassword")}
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
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={primary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
