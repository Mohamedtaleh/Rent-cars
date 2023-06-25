"use client";

import React,{useState} from 'react'
import { SearchButton, SearchManuFacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchBar = ({ setManuFacturer, setModal }) => {
    const [searchmanuFacturer, setSearchManuFacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( searchmanuFacturer=== '' && searchModel === '') {
            return alert('Please fill in the search bar')
        };
        setModal(searchModel)
        setManuFacturer(searchmanuFacturer)


    }

    return (
        <form
            className='searchbar'
            onSubmit={handleSearch}
        >
            <div className='searchbar__item'>
                <SearchManuFacturer
                    selected = {searchModel}
                   setSelected = {setSearchManuFacturer}
                />
                <SearchButton
                    otherClasses='sm:hidden'
                />
            </div>
            <div className='searchbar__item'>
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4 '
                    alt='car Model'

                />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden'/>

            </div>
                <SearchButton otherClasses='max-sm:hidden'/>

        </form>

  )
}

export default SearchBar
