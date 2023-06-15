import classes from './ProductForm.module.css'
import { useRef } from 'react'
import { useRouter } from "next/router"

export default function ProductForm() {

  const router = useRouter();

  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefualt();

    let form = {
      name: nameInputRef.current.nameInputRef,
      image: imageInputRef.current.nameInputRef,
      desc: descriptionInputRef.current.nameInputRef,
      price: priceInputRef.current.nameInputRef,
    }

    // Call Api Request

    // success Case Handling
    router.push('/');
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Product Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Product Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <input type="text" required id="price" ref={priceInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Add Product</button>
      </div>
    </form>
  )
}
