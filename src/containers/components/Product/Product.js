import React, {useState, useEffect} from 'react';
import './Product.css';


const Product = () =>{
  

    const [title, setTitle] = useState('')
    const titleInput = (titleEvent) => {
        setTitle(titleEvent.target.value);
    };

    const [description, setDescription] = useState('')
    const descriptionInput = (eventDescription) => setDescription(eventDescription.target.value);

    const [price, setPrice] = useState('')
    const priceInput = (eventPrice) => setPrice(eventPrice.target.value);

    const [phone, setPhone] = useState('')
    const phoneInput = (eventPhone) => setPhone(eventPhone.target.value);

    const [products , setProducts] = useState([]);

    
    const [image, setImage] = useState([0]);
    const addImage = (eventeImage) => {
        setImage(eventeImage.target.value);
        }

    
    useEffect(() =>{
        getProducts();
    },[]);

    const getProducts = () => {
        fetch('http://localhost:3000/products',{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (products => products.json())
        .then (prodd => setProducts(prodd))
    }

    const addBtn = () =>{
        if(title !== ('') && description !== ('') && price !==('') && phone !== ('')){
        (fetch('http://localhost:3000/products', {
                method: 'Post',
                body: JSON.stringify({
                    title: title, 
                    description:description, 
                    price:price, 
                    phone:phone
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })).then(()=>getProducts());
        }
        else alert('You must read something');
    }
   
    const deleteBtn = (id) => {
        fetch(`http://localhost:3000/products/${id}`,{
            method: 'Delete'
        })
        getProducts();
    }

    return(
        <div className={'main-prod'}>
                <div className ={'product'}>
                    <div className={'product-title'} key={Product.id}>
                        <span>Title:</span>
                        <br></br>
                        <input value ={title} onChange={titleInput} maxLength={'12'}/>
                    </div>
                    <div>
                        <p className={'product-description'} key={Product.id}>
                            <span>Description:</span>
                                <br></br>
                            <textarea value={description} onChange={descriptionInput} maxLength={'250'} rows="3" cols="25"/>
                        </p>
                    </div>
                    <div className ={'product-price'} key={Product.id}>
                        <span>Price:</span>
                        <br></br>
                        <input value={price} onChange={priceInput}  maxLength={'12'} type={'Number'}/>
                    </div>
                    <div>
                        <span>Phone:</span>
                        <br></br>
                        <input value={phone} onChange={phoneInput}  type={'Number'} maxLength={'12'}/>
                    </div>
                    <div className={'product-button'} key={Product.id}>
                        <button onClick={()=>addBtn()}>Add</button>
                        <button value={image} type ={"file"} onClick ={addImage}>Image</button>
                        <button>Clear</button>
                    </div>
                </div>
                {products.map(product => <ul className={'product-ul'} key={product.id}>
                    <li className={'product-title-li'} maxLength={'8'}>
                        {product.title}
                    </li>
                    <li className = {'product-img'}  width='240px' height='165px'>
                        {product.image}
                    </li>
                    <li className={'product-description-li'}>
                        {product.description}
                    </li>
                    <li className={'product-price-li'}>
                        {product.price + "$"}
                    </li>
                    <li className={'product-phone-li'}>
                        {product.phone}
                    </li>
                    <li className={'product-button button'}>
                        <button className = {'product-button-li'}>Buy</button>
                        <button onClick ={()=>deleteBtn(product.id)}>Delete</button>
                    </li>
                </ul>)}
        </div>
    )
}
export default Product;