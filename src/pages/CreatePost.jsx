import React from 'react'

const CreatePost = () => {

  return (
    <section className='createpostsection'>
    <h1>Create post</h1>
    <form action=""  >
      {/* //accept -> mean accept only image */}
        <input type="file" name='image' accept='image/*' />
        {/* <textarea name="caption box" id="" placeholder='write caption'></textarea */}
         <input type="text"  placeholder='caption' required/>
        <button>Submit</button>
    </form>
    </section>
  )
}

export default CreatePost
