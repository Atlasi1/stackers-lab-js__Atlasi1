import {Item, Name, Image, SongItem, SongContainer, AlbumDetails} from "./styled";
import {useState} from "react";

const Album = ({name, tracklist, imageSrc}) => {
    const [visible, setVisible] = useState(false)

    const HandleClick = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <Item>
            <Image src={imageSrc} alt={name}></Image>
            <AlbumDetails>
                <Name onClick={HandleClick}>{name}</Name>
                {visible && <SongContainer>
                    {tracklist.map((item, index) => <SongItem key={index}>{item.name} {item.dateline}</SongItem>)}
                </SongContainer>}
            </AlbumDetails>
        </Item>
    )
}

export default Album;