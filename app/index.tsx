import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'

export default function Screen () {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      {/* ANIMAÇÃO */}
      <View style={styles.section}>  
      <Text style={styles.genre}>Animação:</Text>
      <ScrollView horizontal={true}>
      <View style={styles.horizontalRow}>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/animacao/procurando-nemo.jpg')} />

            <Text style={styles.title}>Procurando Nemo</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/animacao/toy.jpg')} />

            <Text style={styles.title}>Toy Story</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/animacao/viva-festa.jpg')} />

            <Text style={styles.title}>Viva a vida é uma festa</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/animacao/up.jpg')} />

            <Text style={styles.title}>Up - Altas Aventuras</Text>
        </View>
      </View>
      </ScrollView>
      </View>

      {/* AVENTURA */}
      <View style={styles.section}>
      <Text style={styles.genre}>Aventura:</Text>
      <ScrollView horizontal={true}>
      <View style={styles.horizontalRow}>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/aventura/mumia.jpg')} />

            <Text style={styles.title}>A múmia</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/aventura/avatar.jpg')} />

            <Text style={styles.title}>Avatar</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/aventura/moana-2.jpg')} />

            <Text style={styles.title}>Moana 2</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/aventura/uncharted.jpg')} />

            <Text style={styles.title}>Uncharted</Text>
        </View>
      </View>
      </ScrollView>
      </View>

      {/* COMÉDIA */}
      <View style={styles.section}>
      <Text style={styles.genre}>Comédia:</Text>
      <ScrollView horizontal={true}>
      <View style={styles.horizontalRow}>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/comedia/de-volta-acao.jpg')} />

            <Text style={styles.title}>De volta à ação</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/comedia/farofeiros.jpg')} />

            <Text style={styles.title}>Os Farofeiros</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/comedia/ferias-trocadas.jpg')} />

            <Text style={styles.title}>Férias trocadas</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/comedia/partiu-america.jpg')} />

            <Text style={styles.title}>Partiu América</Text>
        </View>
      </View>
      </ScrollView>
      </View>
      

      {/* ROMANCE */}
      <View style={styles.section}>
      <Text style={styles.genre}>Romance:</Text>
      <ScrollView horizontal={true}>
      <View style={styles.horizontalRow}>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/romance/traicao-desejo.png')} />

            <Text style={styles.title}>Traição e Desejo</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/romance/simplesmente-acontece.jpg')} />

            <Text style={styles.title}>Simplesmente acontece</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/romance/amor-redencao.jpg')} />

            <Text style={styles.title}>Amor de redenção</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/romance/sua-culpa.jpg')} />

            <Text style={styles.title}>Sua culpa</Text>
        </View>
      </View>
      </ScrollView>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5ba98',
        padding: 16,
    },

    section: {
        marginBottom: 24,
    },

    genre: {
        fontFamily: 'System',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    horizontalRow: {
        flexDirection: 'row',
        gap: 12,
    },

    card: {
        width: 150,
        borderColor: 'black',
        borderWidth: 2,
        marginRight: 12,
        borderRadius: 15,
        backgroundColor: '#f5f5dc',
        elevation: 5,
    },
    
    image: {
        width: 150,
        height: 150,
        resizeMode: 'center',
    },

    title: {
        fontWeight: 'bold',
        padding: 8,
        fontSize: 15,
        textAlign: 'center',
    },
})