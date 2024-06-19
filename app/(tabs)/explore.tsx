import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,  TouchableOpacity, Linking } from 'react-native'; 


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5E2FD', dark: '#F6D6FF' }}
      headerImage={
        <Image
          source={require('@/assets/images/me.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> Redes Sociais</ThemedText>
      </ThemedView>
     
     <ThemedView style={styles.containerButton}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/omirianoliveira/')} style={styles.Button}> 
        <Ionicons name='logo-instagram' size={24}/>
        <ThemedText>
          Instagram
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.Button}> 
      <Ionicons name='logo-linkedin' size={24}/>
        <ThemedText>
        LinkedIn
         </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => Linking.openURL('https://web.whatsapp.com/')} style={styles.Button}> 
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
    flexDirection: 'row', // alinha os itens na horizontal
    alignItems: 'center', // alinha verticalmente
    justifyContent: 'center', // alinha horizontalmente
    backgroundColor: '#F5E2FD', // cor de fundo do botão (exemplo)
    padding: 10, // espaçamento interno
    borderRadius: 20, // borda arredondada (exemplo)
   
  },
  reactLogo: {
    height: '135%',
    width: '100%',
    bottom: 0,
    left: 0,
    top: 10,
    position: 'absolute',
    alignItems: 'center',
    
  },
});
