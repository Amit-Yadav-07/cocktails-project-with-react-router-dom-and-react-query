import React from 'react'
import { Form, useNavigation } from 'react-router-dom';


function SearchForm({ drink }) {

    const navigation = useNavigation();
    const isSubmission = navigation.state === 'submitting'

    return (
        <Form action="" className='search-container'>
            <input type="search" name='search' defaultValue={drink} id="" placeholder='Search Your Cocktail...' />
            <button className='search-btn' disabled={isSubmission}>{isSubmission ? "submitting" : "submit"}</button>
        </Form>
    )
}

export default SearchForm