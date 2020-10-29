// @ts-ignore
import firebase from 'firebase'

export const getProfileUser = async () => {
  const db = firebase.firestore()
  const user = firebase.auth().currentUser
  // if (!user) return {}
  const uid = user.uid.toString()
  const result = await db
    .collection('my-project-vue')
    .doc(uid)
    .get()
  const userProviders = getUserProviders(user.providerData)

  if (result && result.data()) { return { ...result.data(), providers: userProviders } }
  // if has no data, then save data
  const userProfile = {
    id: uid,
    email: user.email || '',
    name: user.displayName || '',
    photoURL: user.photoURL || '',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  await saveProfileUser(userProfile)
  return { ...userProfile, providers: userProviders }
}

export const saveProfileUser = async (userProfile) => {
  const db = firebase.firestore()
  const user = firebase.auth().currentUser
  if (!user) return null
  const uid = user.uid.toString()
  await db
    .collection('user')
    .doc(uid)
    .set(userProfile)
}
const getUserProviders = (providerData) => {
  return providerData
    .filter((i) => {
      return i.providerId
    })
    .map((i) => i.providerId || '')
}
