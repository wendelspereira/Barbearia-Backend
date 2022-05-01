import React, { useContext } from "react";
import { useAuth } from "../../context/auth";
import { View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
