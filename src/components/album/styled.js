import {styled} from "styled-components"

export const Item = styled.div`
    display: flex;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }
`;

export const SongContainer = styled.div`
    display: block;
    padding-top: 10px;
`;

export const SongItem = styled.li`
    margin-bottom: 10px;
    font-size: 18px;
    color: #666;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 5px;
    &:last-child {
        border-bottom: none;
    }
`;

export const Name = styled.h2`
    margin: 0;
    cursor: pointer;
    font-size: 22px;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
        color: #666;
    }
`;

export const AlbumContainer = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
`;

export const Image = styled.img`
    width: 150px;
    height: auto;
    border-radius: 10px 0 0 10px;
`;

export const AlbumDetails = styled.div`
    flex: 1;
    padding: 20px;
`;