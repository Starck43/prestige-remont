import {useRouter} from 'next/router'
import ErrorPage from 'next/error'

import Layout from '../components/layout'


export default function Page({post}) {
	const router = useRouter()
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404}/>
	}
	return (
		<Layout>
{/*			{router.isFallback ? (
				<div>Загрузка...</div>
			) : (
				<Post post={post}/>
				)
			}*/}
		</Layout>
	)
}

export async function getStaticProps({params}) {
	const post = {} || null

	if (!post) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	return {
		props: {
			post
		},
		revalidate: 60 * 60 * 24,

	}
}

export async function getStaticPaths() {
	// fetching all posts only with a 'slug' field
	const posts = []

	return {
		paths: posts?.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}
