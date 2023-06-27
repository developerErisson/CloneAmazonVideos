import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

import PrimeVideoLogo from '../../assets/prime_video.png'
import Amazon_logo from '../../assets/amazon_logo.png'
import MovieTheWheel from '../../assets/movies/the_wheel_of_time.png'
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesCrimes";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={Amazon_logo} />
            </View>


            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Show</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

                <TouchableOpacity style={styles.movieImgThumb}>
                    <Image style={styles.movieImg} source={MovieTheWheel} />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Continue Watching
                </Text>
                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard url={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>
                    Crimes Movies
                </Text>
                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard url={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.title}>
                    Best Selers
                </Text>
                <FlatList
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard url={item.moviesURL} />}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start"
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15
    },

    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,

    },

    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff"
    },

    movieImgThumb: {
        width: "100%",
        alignItems: "center"

    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30
    }
})