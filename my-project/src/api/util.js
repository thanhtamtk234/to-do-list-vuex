import { PRODUCT_COLLECTION, PRODUCT_ITEM_COLLECTION } from './key'
import * as firebase from 'firebase'

export const getIdsCollection = async (keyCollection) => {
  const DB = firebase.firestore()
  const res = await DB.collection(keyCollection).get()
  return res.docs.map(item => item.id)
}

export const getListProduct = async () => {
  const DB = firebase.firestore()
  const data = []
  const productIds = await getIdsCollection(PRODUCT_COLLECTION)
  for (const productId of productIds) {
    const res = await DB.collection(PRODUCT_COLLECTION).doc(productId).get()
    data.push(res.data())
  }
  return data
}

export const getListProductItem = async () => {
  const DB = firebase.firestore()
  let data = []
  const productIds = await getIdsCollection(PRODUCT_COLLECTION)
  for (let productId of productIds) {
    const res = await DB
      .collection(PRODUCT_COLLECTION)
      .doc(productId)
      .collection(PRODUCT_ITEM_COLLECTION)
      .get()
    const productItemIds = res.docs
    for (let productItemId of productItemIds) {
      const listProductItem = await DB
        .collection(PRODUCT_COLLECTION)
        .doc(productId)
        .collection(PRODUCT_ITEM_COLLECTION)
        .doc(productItemId.id)
        .get()
      data.push(listProductItem.data())
    }
  }
  return data
}

export const getListProductItemOfProduct = async () => {
  const DB = firebase.firestore()
  let data = []
}
