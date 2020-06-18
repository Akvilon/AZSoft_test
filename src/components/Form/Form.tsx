import * as React from 'react';
import { Input } from '../../utils/Input';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { CacheItem } from '../../Models/CacheItem';
import { useTheme } from 'react-jss';
import useStyles from './Form.styles';

type FormProps = {
    addCacheItem: (item: CacheItem) => void,
    selectedItem: CacheItem
}

const Form: React.FC<FormProps> = ({selectedItem, addCacheItem}) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [inputData, setInputData] = useState({
        key: '',
        value: ''
    })

    useEffect(() => {
        setInputData(prevState => ({ ...prevState, key: selectedItem.key }))
        setInputData(prevState => ({ ...prevState, value:  selectedItem.value }))
    },[selectedItem])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addCacheItem(inputData)
        setInputData(prevState => ({ ...prevState, key: '' }))
        setInputData(prevState => ({ ...prevState, value: '' }))
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setInputData(prevState => ({ ...prevState, [name]: value }))
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={classes.Form}>

                <Input
                    type='text'
                    label="Key"
                    name="key"
                    value={inputData.key}
                    id={uuidv4()}
                    onChange={handleInput}
                />
                <Input
                    type='text'
                    label="Value"
                    name="value"
                    value={inputData.value}
                    id={uuidv4()}
                    onChange={handleInput}
                />
                <Button type="submit" variant={ButtonVariant.PRIMARY} disabled={inputData.key === '' && inputData.value === ''}>
                    <h2>Save to cache</h2>
                </Button>
            </form>
        </>
    )
}


export { Form }