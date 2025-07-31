import { Tabs } from "expo-router";
import { HomeIcon, MissionsIcon, GoalsIcon, ExperiencesIcon, MenuIcon } from "@/components/TabIcons";
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
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Início",
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} size={18} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="missions" 
        options={{ 
          title: "Missões",
          tabBarIcon: ({ color }) => (
            <MissionsIcon color={color} size={20} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="goals" 
        options={{ 
          title: "Metas",
          tabBarIcon: ({ color }) => (
            <GoalsIcon color={color} size={26} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="experiences" 
        options={{ 
          title: "Experiências",
          tabBarIcon: ({ color }) => (
            <ExperiencesIcon color={color} size={22} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="menu" 
        options={{ 
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MenuIcon color={color} size={19} />
          ),
        }} 
      />
    </Tabs>
  );
}
