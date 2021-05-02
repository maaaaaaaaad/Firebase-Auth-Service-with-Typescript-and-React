import { firebaseAuth, githubProvider, googleProvider } from "./firebaseDB";

class AuthServiceImpl {
  login(providerClass: string): Promise<any> {
    const provider = this.getProvider(providerClass);
    return firebaseAuth.signInWithPopup(provider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  userState(onAuthChanged: Function): void {
    firebaseAuth.onAuthStateChanged((user) => onAuthChanged(user));
  }

  getProvider(providerClass: string) {
    switch (providerClass) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`Not vaild ${providerClass}`);
    }
  }
}

export default AuthServiceImpl;
