import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'fx4p1ard',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
  token: 'skgrisb3qyHpIk1TxTSPJOcqAUwRkyaxtq2bYBlqt28kh56vCPIPKpNy4m4P2Z9vPD6MMFdqU6hgHjEcqYhKOVqKQ162Z8rf16QXXKqpZWPqvL612e6K6l06vgvTUZ8uF1NhYCwZ8M7VVgek8ZibBtkUJNGHtF0M9BCFs3QcjbYZUrnKiOhO'
})
