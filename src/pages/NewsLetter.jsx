import { useLoaderData, Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsLetterUrl = 'https://jsonplaceholder.typicode.com/posts';
export const action = async ({ request }) => {
    
    const formData = await request.formData();
    const data = Object.fromEntries(formData)

    try {
        const response = await axios.post(newsLetterUrl, data);
        toast.success('data submitted successfully')
        return redirect('/')
    } catch (error) {
        toast.error(error?.message)
        return error;

    }
}

function NewsLetter() {

    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting'
    
    return (
        <Form action="" method="POST" className="newsletter-container">
            <div className='form-container'>
                <h3>Our NewsLetter</h3>
                <div className="fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div className="fields">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>

                <div className="fields">
                    <label htmlFor="lastName">Email</label>
                    <input type="email" name="email" id="lastName" defaultValue='test@test.com' required />
                </div>
                <button type="submit" className='news-btn' disabled={isSubmitting}>{isSubmitting ? 'submitting' : 'submit'}</button>
            </div>
        </Form>
    )
}

export default NewsLetter