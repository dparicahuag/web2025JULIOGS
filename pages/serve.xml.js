import posts from '../data';
import { getServerSideSitemap } from 'next-sitemap'

// Sitemap component 
export default function Sitemap() {}

// collect all the post
export async function getServerSideProps(ctx) {

  const { params } =    ctx
  
// allPosts =[]
  const allPosts = posts.map(
    post=> {
      const xmlData =  post.frontmatter
    
      return {
        author: xmlData.author,
        
        description: xmlData.description,
        
        
        title: xmlData.title
        
      }
      
    } 
  )

  //  fetch all the post and pass into getServerSideSitemap. but make sure your allPasts in array.

  return  await  getServerSideSitemap(ctx, allPosts)
}