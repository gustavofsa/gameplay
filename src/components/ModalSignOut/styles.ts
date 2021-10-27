import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  container: {
    flex: 1,
    marginTop: 560,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    lineHeight: 25,
    marginVertical: 24,
  },
  highlight: {
    color: theme.colors.primary
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonBorder: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
  },
  cancelButton: {
    paddingHorizontal: 65,
    paddingVertical: 15,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  signOutButton: {
    paddingHorizontal: 66,
    paddingVertical: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  buttonText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
  }
});
