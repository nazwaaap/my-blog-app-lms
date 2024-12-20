import './postItem.css';
import { Button, Gap } from '../../atoms';

function PostItem({ image, title, name, date, body }) {  // Menggunakan destructuring untuk props
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={image} alt={title} />
            <div className='content-detail'>
                <div className='title-wrapper'>
                    <h3 className='title'>{title}</h3>
                    <div className='edit-wrapper'>
                        <Button title='Edit'/>
                        <Gap width={10} />
                        <Button title='Hapus' />
                    </div>
                </div>
                <p className='author'>{name} - {date}</p>
                <p className='body'>{body}</p>
                <Gap height={20} />
                <Button title="Lihat Detail" />
            </div>
        </div>
    );
}

export default PostItem;
