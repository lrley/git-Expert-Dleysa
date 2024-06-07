export const getGifs= async(cate)=>{

    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=uUlvK3H9r1SU5uwgFa0ivM9VVIuGST0U&q=${ cate }&limit=10`
    const resp= await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map ( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_large.url,
    }));
    
   
    return gifs;

}
