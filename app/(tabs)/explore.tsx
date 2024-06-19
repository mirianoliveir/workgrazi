import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,  TouchableOpacity } from 'react-native'; 


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F6D6FF', dark: '#e7bbe7' }}
      headerImage={
        <Image
          source={require('@/assets/images/eu.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Minhas Redes Sociais</ThemedText>
      </ThemedView>
     
     <ThemedView style={styles.containerButton}>
      <TouchableOpacity style={styles.Button}> 
        <Ionicons name='logo-instagram' size={24}/>
        <ThemedText>
          Instagram
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='logo-facebook' size={24}/>
        <ThemedText>
         Facebook
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='logo-whatsapp' size={24}/>
        <ThemedText>
          WhatSapp
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='keypad-outline' size={24}/>
        <ThemedText>
          Telefone
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='mail' size={24}/>
        <ThemedText>
          E-mail
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='logo-twitter' size={24}/>
        <ThemedText>
        Twitter
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}> 
      <Ionicons name='logo-github' size={24}/>
        <ThemedText>
          GitHub
         </ThemedText>
      </TouchableOpacity>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  containerButton: {
    flexDirection: "column",
    gap: 8,
  },
  Button:{
    backgroundColor: "#E0B0FF",
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
  },
  reactLogo: {
    height: 278,
    width: 360,
    bottom: 0,
    left: 0,
    top: 10,
    position: 'absolute',
    
  },
});
