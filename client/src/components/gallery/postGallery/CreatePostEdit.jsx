import *as galleryPostService from '../../../api/galleryPostService'
import './PostInGallery.css'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { useEffect, useState } from 'react';

export default function CreatePostEdit() {
    const navigate = useNavigate();
    const { id } = useParams()
    const [data, setData] = useState({
        name: '',
        Image: '',
        Description: '',
        KnifeType: '',
        OverallLength: '',
        BladeLength: '',
        CuttingEdge: '',
        BladeThickness: '',
        BladeSteel: '',
        BladeFinish: '',
        HandleMaterial: '',
        KnifeWeight: '',
        WeightSheath: '',
        SheathIncluded: '',
        SheathMaterial: '',
        SheathClip: '',
        Designer: '',
    })

    useEffect(() => {
        galleryPostService.getOne(id)
            .then(result => {
                setData(result);
            })
    }, [id])

    const editPostSubmitHandler = async (values) => {

        try {
            await galleryPostService.edit(id, values);
            navigate('/gallery')
        } catch {
            console.log(err);
        }

    }


    const onChange = (e) => {

        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();
        editPostSubmitHandler(data);
    }



    return (
        <div className="wrapper">

            <section className="registerForm  ">
                <h2>Edit post</h2>
                <form action="" onSubmit={onSubmit} >

                    <input type="text"
                        placeholder="name"
                        id='name'
                        name='name'
                        onChange={onChange}
                        value={data.name}

                    />
                    <input type="text"
                        placeholder="Image"
                        id='ImageUrl'
                        name='ImageUrl'
                        onChange={onChange}
                        value={data.ImageUrl}

                    />
                    <input type="textarea"
                        placeholder="Description"
                        id='Description'
                        name='Description'
                        onChange={onChange}
                        value={data.Description} />

                    <input type="text"
                        placeholder="Knife Type"
                        id='KnifeType'
                        name='KnifeType'
                        onChange={onChange}
                        value={data.KnifeType}

                    />
                    <input type="text"
                        placeholder="Overal lLength"
                        id='OverallLength'
                        name='OverallLength'
                        onChange={onChange}
                        value={data.OverallLength}

                    />
                    <input type="text"
                        placeholder="Blade Length"
                        id='BladeLength'
                        name='BladeLength'
                        onChange={onChange}
                        value={data.BladeLength}

                    />
                    <input type="text"
                        placeholder="Cutting Edge"
                        id='CuttingEdge'
                        name='CuttingEdge'
                        onChange={onChange}
                        value={data.CuttingEdge}

                    />
                    <input type="number"
                        placeholder="Blade Thickness"
                        id='BladeThickness'
                        name='BladeThickness'
                        onChange={onChange}
                        value={data.BladeThickness}

                    />
                    <input type="text"
                        placeholder="Blade Steel"
                        id='BladeSteel'
                        name='BladeSteel'
                        onChange={onChange}
                        value={data.BladeSteel}

                    />
                    <input type="text"
                        placeholder="Blade Finish"
                        id='BladeFinish'
                        name='BladeFinish'
                        onChange={onChange}
                        value={data.BladeFinish}

                    />
                    <input type="text"
                        placeholder="Handle Material"
                        id='HandleMaterial'
                        name='HandleMaterial'
                        onChange={onChange}
                        value={data.HandleMaterial}

                    />
                    <input type="number"
                        placeholder="Knife Weight"
                        id='KnifeWeight'
                        name='KnifeWeight'
                        onChange={onChange}
                        value={data. KnifeWeight}

                    />
                    <input type="number"
                        placeholder="Weight Sheath"
                        id='WeightSheath'
                        name='WeightSheath'
                        onChange={onChange}
                        value={data. WeightSheath}

                    />
                    <input type="text"
                        placeholder="Sheath Included"
                        id='SheathIncluded'
                        name='SheathIncluded'
                        onChange={onChange}
                        value={data.SheathIncluded}

                    />
                    <input type="text"
                        placeholder="Sheath Material"
                        id='SheathMaterial'
                        name='SheathMaterial'
                        onChange={onChange}
                        value={data.SheathMaterial}

                    />
                    <input type="text"
                        placeholder="Sheath Clip"
                        id='SheathClip'
                        name='SheathClip'
                        onChange={onChange}
                        value={data.SheathClip}

                    />
                    <input type="text"
                        placeholder="Designer"
                        id='Designer'
                        name='Designer'
                        onChange={onChange}
                        value={data.Designer}

                    />
                   
                    <button type="submit" className="grow">Save</button>

                </form>
            </section>
        </div>
    )
}



       
       