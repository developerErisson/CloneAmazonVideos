import { TouchableOpacity, Image, StyleSheet } from "react-native"

export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.url} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20
    }
}) 