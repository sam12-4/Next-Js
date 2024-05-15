import React from 'react'

const page = ({params}) => {
    let a = params.slug;
  return (
    <div>
      {params.slug}
    </div>
  )
}

export default page
{}