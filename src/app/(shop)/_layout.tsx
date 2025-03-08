import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"

const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#1BC464",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10
                },
                headerShown: false
            }}>
                <Tabs.Screen name='index' options={{headerShown: false}}/>
                <Tabs.Screen name='orders' options={{}}/>
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }
})