import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../../context/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
