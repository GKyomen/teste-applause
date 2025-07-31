import { Tabs } from "expo-router";
import { HomeIcon, MissionsIcon, GoalsIcon, ExperiencesIcon, MenuIcon } from "@/components/icons";
import { colors } from "@/styles/colors";

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          backgroundColor: colors.quaternary,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: {
          fontFamily: 'Poppins_600SemiBold',
          fontSize: 10,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        tabBarHideOnKeyboard: true,
        animation: 'shift',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color} size={18} focused={focused} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="missions" 
        options={{ 
          title: "Missões",
          tabBarIcon: ({ color, focused }) => (
            <MissionsIcon color={color} size={20} focused={focused} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="goals" 
        options={{ 
          title: "Metas",
          tabBarIcon: ({ color, focused }) => (
            <GoalsIcon color={color} size={26} focused={focused} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="experiences" 
        options={{ 
          title: "Experiências",
          tabBarIcon: ({ color, focused }) => (
            <ExperiencesIcon color={color} size={22} focused={focused} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="menu" 
        options={{ 
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <MenuIcon color={color} size={19} focused={focused} />
          ),
        }} 
      />
    </Tabs>
  );
}
