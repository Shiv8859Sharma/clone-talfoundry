import unableImage from '@/assets/commonAssets/unableImage.svg'
import profilePlaceholder from '@/assets/commonAssets/profilePlaceholder.svg'


const Image = (props) => {
    let { src = '', alt = '', type = '', title = '', className = '', id = '', style = {} } = props
    return <img src={src || (type !== 'profile' ? unableImage : profilePlaceholder)} alt={alt || 'image '} id={id} className={className} title={title} style={style} loading="lazy" />
}

export default Image