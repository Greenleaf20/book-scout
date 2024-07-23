import { Card } from 'flowbite-react';
import './OutputItem.css';

function OutputItem({item,id}) {
    return (
        <div>
            <Card className="max-w-sm book-card" imgAlt="Book shelf" imgSrc={item.volumeInfo.imageLinks.smallThumbnail}>
                Title: {item.volumeInfo.title} <br/> <br/>
                Authors:
                <ul>
                    {
                        item.volumeInfo.authors && item.volumeInfo.authors.map ((authorname,index) => 
                            <li key={index}>{authorname}</li>
                        )
                    }
                </ul>             
            </Card>
        </div>
    );
}

export default OutputItem;