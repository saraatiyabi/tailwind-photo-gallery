import React, { useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";
import { PIXABAY_API_KEY } from "./keys";
import ImageSearch from "./components/ImageSearch";
import { MagnifyingGlass } from 'react-loader-spinner'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setTimeout(() => {
          setIsLoading(false)
        }, 3000);
      }).catch((err) => {
        setErrMessage(err);
        setIsLoading(false)
        setImages([])
      })
  }, [term])

  return (
    <div className="container mx-auto">
      <ImageSearch setSearch={(text) => {
        setTerm(text)
        setIsLoading(true)
      }} />
      {
        !isLoading && images.length === 0 && (<h1 className="text-5xl text-center mx-auto mt-32 w-full">Not Found</h1>)
      }
      {
        !isLoading && errMessage && (<h1 className="text-5xl text-center mx-auto mt-32 w-full">Error :(( please try again later!</h1>)
      }
      {
        isLoading ? (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ margin: "100px auto" }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
          />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {
              images.map(image => (
                <PhotoCard key={image.id} {...image} />
              ))
            }
          </div>
        )
      }

    </div>
  );
}

export default App;
