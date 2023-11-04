import '../../../../../node_modules/rsuite/dist/rsuite.min.css'

import {Button, Modal} from 'rsuite'
import {useRef, useState} from 'react'

import ProductsService from '../../../../services/productsService'
import convertToBase64 from '../../../../helpers/base64Converter'

const AddItemForm = (props) => {
  const [category, setCategory] = useState('Piće')

  const subCategoryInputRef = useRef()
  const nameInputRef = useRef()
  const priceInputRef = useRef()
  const imageInputRef = useRef()

  const [itemImage, setItemImage] = useState(null)
  const [itemImagePreview, setItemImagePreview] = useState(null)

  async function handleChange(e) {
    setItemImagePreview(await convertToBase64(e.target.files[0]))
    setItemImage(e.target.files[0])
  }

  const handleSaveForm = async () => {
    await saveItem()
    props.handleItemModalClose()
  }

  const saveItem = async () => {
    const item = {
      category: category,
      subCategory: subCategoryInputRef.current.value,
      name: nameInputRef.current.value,
      price: priceInputRef.current.value,
      image: itemImagePreview
    }

    const formData = new FormData()

    formData.append('category', category)
    formData.append('subCategory', subCategoryInputRef.current.value)
    formData.append('name', nameInputRef.current.value)
    formData.append('price', priceInputRef.current.value)
    formData.append('image', itemImage)

    try {
      const response = await ProductsService.addProduct(formData)

      if (response) {
        console.log('Item saved successfully')
      } else {
        console.log('Failed to save item')
      }
    } catch (error) {
      console.error('An error occurred while saving the item:', error)
    }
  }

  const renderCategoryOptions = () => {
    return (
      <>
        <option value="Piće">Piće</option>
        <option value="Hrana">Hrana</option>
      </>
    )
  }

  const renderSubCategoryOptions = () => {
    if (category === 'Piće') {
      return props.drinkCategories.map((category) => (
        <option key={category.name} value={category.name.toLowerCase()}>
          {category.name}
        </option>
      ))
    } else {
      return props.foodCategories.map((category) => (
        <option key={category.name} value={category.name.toLowerCase()}>
          {category.name}
        </option>
      ))
    }
  }

  return (
    <>
      {props.isAddItemModalOpen && (
        <div className="flex m-auto text-center">
          <Modal
            size="md"
            open={props.isAddItemModalOpen}
            onClose={props.handleItemModalClose}
            backdrop={props.isAddItemModalOpen}>
            <Modal.Header className="border-b-2 text-2xl py-2">Dodaj Stavku</Modal.Header>
            <Modal.Body>
              <form className="flex flex-wrap">
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="category">
                    Kategorija
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    {renderCategoryOptions()}
                  </select>
                </div>
                <div className="w-full flex flex-col">
                  <label className="mb-2 mt-2" htmlFor="subCategory">
                    Podkategorija
                  </label>
                  <select
                    className="py-3 px-2 border-2 border-black rounded-lg"
                    placeholder="Choose Subcategory"
                    id="subCategory"
                    ref={subCategoryInputRef}>
                    {renderSubCategoryOptions()}
                  </select>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="name">
                      Ime
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Dodaj Ime..."
                      id="name"
                      type="text"
                      ref={nameInputRef}
                    />
                  </div>
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="price">
                      Cena
                    </label>
                    <input
                      className="py-3 px-2 border-2 border-black rounded-lg"
                      placeholder="Dodaj Cenu..."
                      id="price"
                      type="text"
                      ref={priceInputRef}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-45 flex flex-col">
                    <label className="mb-2 mt-2" htmlFor="image">
                      Slika
                    </label>
                    <label htmlFor="itemImage" className="py-6 px-16 bg-slate-50 m-auto rounded-lg">
                      Choose a picture
                    </label>
                    <input name="itemImage" id="itemImage" hidden type="file" onChange={handleChange} />
                    {itemImage ? <img src={itemImagePreview} /> : null}
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-[#3498ff]" onClick={handleSaveForm} appearance="primary">
                Ok
              </Button>
              <Button onClick={props.handleItemModalClose} appearance="subtle">
                Otkaži
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  )
}

export default AddItemForm
