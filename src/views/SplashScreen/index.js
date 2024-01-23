import { View } from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import splashAluraMed from '../../assets/splash-aluramed.json'

export default function SplashScreen() {
    return (
    <View style={styles.container}>
        <LottieView source={splashAluraMed} loop={true}/>
    </View>
    )
};