import React, { Component } from 'react'

import './index.css'

const wordsList = [
    {
        firstWord: 'actor',
    },
    {
        secondWord: 'above'
    },
    {
        thirdWord: 'alike'
    },
    {
        fourthWord: 'align'
    },
    {
        fifthWord: 'arise'
    }
]

export class Home extends Component {
    state = {
            firstWordFirstLetter: '',
            firstWordSecondLetter: '',
            firstWordThirdLetter: '',
            firstWordFourthLetter: '',
            firsWordFifthLetter: '',

            secondWordFirstLetter: '',
            secondWordSecondLetter:'',
            secondWordThirdLetter: '',
            secondWordFourthLetter: '',
            secondWordFifthLetter: '',

            thirdWordFirstLetter: '',
            thirdWordSecondLetter: '',
            thirdWordThirdLetter: '',
            thirdWordFourthLetter: '',
            thirdWordFifthLetter: '',

            fourthWordFirstLetter: '',
            fourthWordSecondLetter: '',
            fourthWordThirdLetter: '',
            fourthWordFourthLetter: '',
            fourthWordFifthLetter: '',

            fifthWordFirstLetter: '',
            fifthWordSecondLetter: '',
            fifthWordThirdLetter: '',
            fifthWordFourthLetter: '',
            fifthWordFifthLetter: '',
            count: 6,
            toggleButton: true
    }

    onChangeFirstWordFirstLetter = event => {
        this.setState({firstWordFirstLetter: event.target.value})
    }

    onChangeFirstWordSecondLetter = event => {
        this.setState({firstWordSecondLetter: event.target.value})
    }

    onChangeFirstWordThirdLetter = event => {
        this.setState({firstWordThirdLetter: event.target.value})
    }

    onChangeFirstWordFourthLetter = event => {
        this.setState({firstWordFourthLetter: event.target.value})
    }

    onChangeFirstWordFifthLetter = event => {
        this.setState({firsWordFifthLetter: event.target.value})
    }

   

   renderFirstWordFirstLetterField = () => {
        const {firstWordFirstLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (firstWordFirstLetter.toLocaleLowerCase() === wordsList[0].firstWord[0]){

             backgroundClassName = 'green-backkground'
        }else if(wordsList[0].firstWord.includes(firstWordFirstLetter.toLocaleLowerCase()) === true && firstWordFirstLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[0].firstWord.includes(firstWordFirstLetter.toLocaleLowerCase()) !== true && firstWordFirstLetter !== ''){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFirstWordFirstLetter}
                    value={firstWordFirstLetter}
                    type='text'
                />
            </>
        )
    }


    renderFirstWordSecondLetterField = () => {
        const {firstWordSecondLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (firstWordSecondLetter.toLocaleLowerCase() === wordsList[0].firstWord[1]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[0].firstWord.includes(firstWordSecondLetter.toLocaleLowerCase()) === true && firstWordSecondLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[0].firstWord.includes(firstWordSecondLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFirstWordSecondLetter}
                    value={firstWordSecondLetter}
                    type='text'
                />
            </>
        )
    }

    
    renderFirstWordThirdLetterField = () => {
        const {firstWordThirdLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (firstWordThirdLetter.toLocaleLowerCase() === wordsList[0].firstWord[2]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[0].firstWord.includes(firstWordThirdLetter.toLocaleLowerCase()) === true && firstWordThirdLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[0].firstWord.includes(firstWordThirdLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFirstWordThirdLetter}
                    value={firstWordThirdLetter}
                    type='text'
                />
            </>
        )
    }


    renderFirstWordFourthLetterField = () => {
        const {firstWordFourthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (firstWordFourthLetter.toLocaleLowerCase() === wordsList[0].firstWord[3]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[0].firstWord.includes(firstWordFourthLetter.toLocaleLowerCase()) === true && firstWordFourthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[0].firstWord.includes(firstWordFourthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFirstWordFourthLetter}
                    value={firstWordFourthLetter}
                    type='text'
                />
            </>
        )
    }

    renderFirstWordFifthLetterField = () => {
        const {firsWordFifthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (firsWordFifthLetter.toLocaleLowerCase() === wordsList[0].firstWord[4]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[0].firstWord.includes(firsWordFifthLetter.toLocaleLowerCase()) === true && firsWordFifthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[0].firstWord.includes(firsWordFifthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFirstWordFifthLetter}
                    value={firsWordFifthLetter}
                    type='text'
                />
            </>
        )
    }

    onChangeSecondWordFirstLetter = event => {
        this.setState({secondWordFirstLetter: event.target.value})
    }

    onChangeSecondWordSecondLetter = event => {
        this.setState({secondWordSecondLetter: event.target.value})
    }

    onChangeSecondWordThirdLetter = event => {
        this.setState({secondWordThirdLetter: event.target.value})
    }

    onChangeSecondWordFourthLetter = event => {
        this.setState({secondWordFourthLetter: event.target.value})
    }

    onChangeSecondWordFifthLetter = event => {
        this.setState({secondWordFifthLetter: event.target.value})
    }


    renderSecondWordFirstLetterField = () => {
        const {secondWordFirstLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (secondWordFirstLetter.toLocaleLowerCase() === wordsList[1].secondWord[0]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[1].secondWord.includes(secondWordFirstLetter.toLocaleLowerCase()) === true && secondWordFirstLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[1].secondWord.includes(secondWordFirstLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeSecondWordFirstLetter}
                    value={secondWordFirstLetter}
                    type='text'
                />
            </>
        )
    }


    renderSecondWordSecondLetterField = () => {
        const {secondWordSecondLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (secondWordSecondLetter.toLocaleLowerCase() === wordsList[1].secondWord[1]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[1].secondWord.includes(secondWordSecondLetter.toLocaleLowerCase()) === true && secondWordSecondLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[1].secondWord.includes(secondWordSecondLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeSecondWordSecondLetter}
                    value={secondWordSecondLetter}
                    type='text'
                />
            </>
        )
    }


    renderSecondWordThirdLetterField = () => {
        const {secondWordThirdLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (secondWordThirdLetter.toLocaleLowerCase() === wordsList[1].secondWord[2]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[1].secondWord.includes(secondWordThirdLetter.toLocaleLowerCase()) === true && secondWordThirdLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[1].secondWord.includes(secondWordThirdLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeSecondWordThirdLetter}
                    value={secondWordThirdLetter}
                    type='text'
                />
            </>
        )
    }


    renderSecondWordFourthLetterField = () => {
        const {secondWordFourthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (secondWordFourthLetter.toLocaleLowerCase() === wordsList[1].secondWord[3]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[1].secondWord.includes(secondWordFourthLetter.toLocaleLowerCase()) === true && secondWordFourthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[1].secondWord.includes(secondWordFourthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeSecondWordFourthLetter}
                    value={secondWordFourthLetter}
                    type='text'
                />
            </>
        )
    }


    renderSecondWordFifthLetterField = () => {
        const {secondWordFifthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (secondWordFifthLetter.toLocaleLowerCase() === wordsList[1].secondWord[4]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[1].secondWord.includes(secondWordFifthLetter.toLocaleLowerCase()) === true && secondWordFifthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[1].secondWord.includes(secondWordFifthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeSecondWordFifthLetter}
                    value={secondWordFifthLetter}
                    type='text'
                />
            </>
        )
    }

    onChangeThirdWordFirstLetter = event => {
        this.setState({thirdWordFirstLetter: event.target.value})
    }

    onChangeThirdWordSecondLetter = event => {
        this.setState({thirdWordSecondLetter: event.target.value})
    }


    onChangeThirdWordThirdLetter = event => {
        this.setState({thirdWordThirdLetter: event.target.value})
    }

    onChangeThirdWordFourthLetter = event => {
        this.setState({thirdWordFourthLetter: event.target.value})
    }

    onChangeThirdWordFifthLetter = event => {
        this.setState({thirdWordFifthLetter: event.target.value})
    }



    renderThirdtWordFirstLetterField = () => {
        const {thirdWordFirstLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (thirdWordFirstLetter.toLocaleLowerCase() === wordsList[2].thirdWord[0]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[2].thirdWord.includes(thirdWordFirstLetter.toLocaleLowerCase()) === true && thirdWordFirstLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[2].thirdWord.includes(thirdWordFirstLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeThirdWordFirstLetter}
                    value={thirdWordFirstLetter}
                    type='text'
                />
            </>
        )
    }


    renderThirdWordSecondLetterField = () => {
        const {thirdWordSecondLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (thirdWordSecondLetter.toLocaleLowerCase() === wordsList[2].thirdWord[1]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[2].thirdWord.includes(thirdWordSecondLetter.toLocaleLowerCase()) === true && thirdWordSecondLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[2].thirdWord.includes(thirdWordSecondLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeThirdWordSecondLetter}
                    value={thirdWordSecondLetter}
                    type='text'
                />
            </>
        )
    }


    renderThirdtWordThirdLetterField = () => {
        const {thirdWordThirdLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (thirdWordThirdLetter.toLocaleLowerCase() === wordsList[2].thirdWord[2]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[2].thirdWord.includes(thirdWordThirdLetter.toLocaleLowerCase()) === true && thirdWordThirdLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[2].thirdWord.includes(thirdWordThirdLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeThirdWordThirdLetter}
                    value={thirdWordThirdLetter}
                    type='text'
                />
            </>
        )
    }


    renderThirdWordFourthLetterField = () => {
        const {thirdWordFourthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (thirdWordFourthLetter.toLocaleLowerCase() === wordsList[2].thirdWord[3]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[2].thirdWord.includes(thirdWordFourthLetter.toLocaleLowerCase()) === true && thirdWordFourthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[2].thirdWord.includes(thirdWordFourthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeThirdWordFourthLetter}
                    value={thirdWordFourthLetter}
                    type='text'
                />
            </>
        )
    }


    renderThirdWordFifthLetterField = () => {
        const {thirdWordFifthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (thirdWordFifthLetter.toLocaleLowerCase() === wordsList[2].thirdWord[4]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[2].thirdWord.includes(thirdWordFifthLetter.toLocaleLowerCase()) === true && thirdWordFifthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[2].thirdWord.includes(thirdWordFifthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeThirdWordFifthLetter}
                    value={thirdWordFifthLetter}
                    type='text'
                />
            </>
        )
    }

    onChangeFourthWordFirstLetter = event => {
        this.setState({fourthWordFirstLetter: event.target.value})
    }

    onChangeFourthWordSecondLetter = event => {
        this.setState({fourthWordSecondLetter: event.target.value})
    }

    onChangeFourthWordThirdLetter = event => {
        this.setState({fourthWordThirdLetter: event.target.value})
    }

    onChangeFourthWordFourthLetter = event => {
        this.setState({fourthWordFourthLetter: event.target.value})
    }

    onChangeFourthWordFifthLetter = event => {
        this.setState({fourthWordFifthLetter: event.target.value})
    }

    renderFourthWordFirstLetterField = () => {
        const {fourthWordFirstLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fourthWordFirstLetter.toLocaleLowerCase() === wordsList[3].fourthWord[0]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[3].fourthWord.includes(fourthWordFirstLetter.toLocaleLowerCase()) === true && fourthWordFirstLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[3].fourthWord.includes(fourthWordFirstLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFourthWordFirstLetter}
                    value={fourthWordFirstLetter}
                    type='text'
                />
            </>
        )
    }

    renderFourthWordSecondLetterField = () => {
        const {fourthWordSecondLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fourthWordSecondLetter.toLocaleLowerCase() === wordsList[3].fourthWord[1]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[3].fourthWord.includes(fourthWordSecondLetter.toLocaleLowerCase()) === true && fourthWordSecondLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[3].fourthWord.includes(fourthWordSecondLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFourthWordSecondLetter}
                    value={fourthWordSecondLetter}
                    type='text'
                />
            </>
        )
    }


    renderFourthWordThirdLetterField = () => {
        const {fourthWordThirdLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fourthWordThirdLetter.toLocaleLowerCase() === wordsList[3].fourthWord[2]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[3].fourthWord.includes(fourthWordThirdLetter.toLocaleLowerCase()) === true && fourthWordThirdLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[3].fourthWord.includes(fourthWordThirdLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFourthWordThirdLetter}
                    value={fourthWordThirdLetter}
                    type='text'
                />
            </>
        )
    }

    renderFourthWordFourthLetterField = () => {
        const {fourthWordFourthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fourthWordFourthLetter.toLocaleLowerCase() === wordsList[3].fourthWord[3]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[3].fourthWord.includes(fourthWordFourthLetter.toLocaleLowerCase()) === true && fourthWordFourthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[3].fourthWord.includes(fourthWordFourthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFourthWordFourthLetter}
                    value={fourthWordFourthLetter}
                    type='text'
                />
            </>
        )
    }

    renderFourthWordFifthLetterField = () => {
        const {fourthWordFifthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fourthWordFifthLetter.toLocaleLowerCase() === wordsList[3].fourthWord[4]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[3].fourthWord.includes(fourthWordFifthLetter.toLocaleLowerCase()) === true && fourthWordFifthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[3].fourthWord.includes(fourthWordFifthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFourthWordFifthLetter}
                    value={fourthWordFifthLetter}
                    type='text'
                />
            </>
        )
    }

    onChangeFifthWordFirstLetter = event => {
        this.setState({fifthWordFirstLetter: event.target.value})
    }

    onChangeFifthWordSecondLetter = event => {
        this.setState({fifthWordSecondLetter: event.target.value})
    }

    onChangeFifthWordThirdLetter = event => {
        this.setState({fifthWordThirdLetter: event.target.value})
    }

    onChangeFifthWordFourthLetter = event => {
        this.setState({fifthWordFourthLetter: event.target.value})
    }

    onChangeFifthWordFifthLetter = event => {
        this.setState({fifthWordFifthLetter: event.target.value})
    }

    renderFifthWordFirstLetterField = () => {
        const {fifthWordFirstLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fifthWordFirstLetter.toLocaleLowerCase() === wordsList[4].fifthWord[0]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[4].fifthWord.includes(fifthWordFirstLetter.toLocaleLowerCase()) === true && fifthWordFirstLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[4].fifthWord.includes(fifthWordFirstLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFifthWordFirstLetter}
                    value={fifthWordFirstLetter}
                    type='text'
                />
            </>
        )
    }

    renderFifthWordSecondLetterField = () => {
        const {fifthWordSecondLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fifthWordSecondLetter.toLocaleLowerCase() === wordsList[4].fifthWord[1]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[4].fifthWord.includes(fifthWordSecondLetter.toLocaleLowerCase()) === true && fifthWordSecondLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[4].fifthWord.includes(fifthWordSecondLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFifthWordSecondLetter}
                    value={fifthWordSecondLetter}
                    type='text'
                />
            </>
        )
    }

    renderFifthWordThirdLetterField = () => {
        const {fifthWordThirdLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fifthWordThirdLetter.toLocaleLowerCase() === wordsList[4].fifthWord[2]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[4].fifthWord.includes(fifthWordThirdLetter.toLocaleLowerCase()) === true && fifthWordThirdLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[4].fifthWord.includes(fifthWordThirdLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFifthWordThirdLetter}
                    value={fifthWordThirdLetter}
                    type='text'
                />
            </>
        )
    }

    renderFifthWordFourthLetterField = () => {
        const {fifthWordFourthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fifthWordFourthLetter.toLocaleLowerCase() === wordsList[4].fifthWord[3]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[4].fifthWord.includes(fifthWordFourthLetter.toLocaleLowerCase()) === true && fifthWordFourthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[4].fifthWord.includes(fifthWordFourthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFifthWordFourthLetter}
                    value={fifthWordFourthLetter}
                    type='text'
                />
            </>
        )
    }

    renderFifthWordFifthLetterField = () => {
        const {fifthWordFifthLetter} = this.state
        let backgroundClassName = 'transparent-background'
        if (fifthWordFifthLetter.toLocaleLowerCase() === wordsList[4].fifthWord[4]){
            backgroundClassName = 'green-backkground'
        }else if(wordsList[4].fifthWord.includes(fifthWordFifthLetter.toLocaleLowerCase()) === true && fifthWordFifthLetter !== ''){
            backgroundClassName = 'yellow-backkground'
        }else if (wordsList[4].fifthWord.includes(fifthWordFifthLetter.toLocaleLowerCase()) !== true){
            backgroundClassName = 'gray-background'
        }
        return(
            <>
                <input 
                    className={`input ${backgroundClassName}`}
                    onChange={this.onChangeFifthWordFifthLetter}
                    value={fifthWordFifthLetter}
                    type='text'
                />
            </>
        )
    }



    onSubmitSuccess = () => {
        window.location.href = '/success';
    }

    onSubmitFilure = () => {
        window.location.href = '/failure';
    }

    onSubmitForm = event => {
        event.preventDefault()
        const {count, firstWordFirstLetter, firstWordSecondLetter, firstWordThirdLetter, firstWordFourthLetter, firsWordFifthLetter} = this.state
        const {secondWordFirstLetter, secondWordSecondLetter, secondWordThirdLetter, secondWordFourthLetter, secondWordFifthLetter} = this.state
        const {thirdWordFirstLetter, thirdWordSecondLetter, thirdWordThirdLetter, thirdWordFourthLetter, thirdWordFifthLetter} = this.state
        const {fourthWordFirstLetter, fourthWordSecondLetter, fourthWordThirdLetter, fourthWordFourthLetter, fourthWordFifthLetter} = this.state
        const {fifthWordFirstLetter, fifthWordSecondLetter, fifthWordThirdLetter, fifthWordFourthLetter, fifthWordFifthLetter} = this.state
        const formFirstWord = `${firstWordFirstLetter[0]}${firstWordSecondLetter[0]}${firstWordThirdLetter[0]}${firstWordFourthLetter[0]}${firsWordFifthLetter[0]}`
        const formSecondWord = `${secondWordFirstLetter[0]}${secondWordSecondLetter[0]}${secondWordThirdLetter[0]}${secondWordFourthLetter[0]}${secondWordFifthLetter[0]}`
        const formThirdWord = `${thirdWordFirstLetter[0]}${thirdWordSecondLetter[0]}${thirdWordThirdLetter[0]}${thirdWordFourthLetter[0]}${thirdWordFifthLetter[0]}`
        const formFourthWord = `${fourthWordFirstLetter[0]}${fourthWordSecondLetter[0]}${fourthWordThirdLetter[0]}${fourthWordFourthLetter[0]}${fourthWordFifthLetter[0]}`
        const formFifthWord = `${fifthWordFirstLetter[0]}${fifthWordSecondLetter[0]}${fifthWordThirdLetter[0]}${fifthWordFourthLetter[0]}${fifthWordFifthLetter[0]}`


        if ((formFirstWord.toLocaleLowerCase() === wordsList[0].firstWord) 
            || (formSecondWord.toLocaleLowerCase() === wordsList[1].secondWord)
            || (formThirdWord.toLocaleLowerCase() === wordsList[2].thirdWord)
            || (formFourthWord.toLocaleLowerCase() === wordsList[3].fourthWord)
            || (formFifthWord.toLocaleLowerCase() === wordsList[4].fifthWord)
            ){
            this.onSubmitSuccess()
        }else if ((formFirstWord.toLocaleLowerCase() !== wordsList[0].firstWord) 
            && (formSecondWord.toLocaleLowerCase() !== wordsList[1].secondWord)
            && (formThirdWord.toLocaleLowerCase() !== wordsList[2].thirdWord) 
            && (formFourthWord.toLocaleLowerCase() !== wordsList[3].fourthWord) 
            && (formFifthWord.toLocaleLowerCase() !== wordsList[4].fifthWord) 
            && (count === 0)){
            this.onSubmitFilure()
        }
    }

    onClickSubmitButton = () => {
        this.setState((prevState) => ({count: prevState.count -1}))
    }


  render() {
    const {count} = this.state
    return (
        <form className="home-form-container" onSubmit={this.onSubmitForm}>
            <div className='words-container'>
                <div>{this.renderFirstWordFirstLetterField()}</div>
                <div>{this.renderFirstWordSecondLetterField()}</div>
                <div>{this.renderFirstWordThirdLetterField()}</div>
                <div>{this.renderFirstWordFourthLetterField()}</div>
                <div>{this.renderFirstWordFifthLetterField()}</div>
            </div>
            <div className='words-container'>
                <div>{this.renderSecondWordFirstLetterField()}</div>
                <div>{this.renderSecondWordSecondLetterField()}</div>
                <div>{this.renderSecondWordThirdLetterField()}</div>
                <div>{this.renderSecondWordFourthLetterField()}</div>
                <div>{this.renderSecondWordFifthLetterField()}</div>
            </div>

            <div className='words-container'>
                <div>{this.renderThirdtWordFirstLetterField()}</div>
                <div>{this.renderThirdWordSecondLetterField()}</div>
                <div>{this.renderThirdtWordThirdLetterField()}</div>
                <div>{this.renderThirdWordFourthLetterField()}</div>
                <div>{this.renderThirdWordFifthLetterField()}</div>
            </div>

            <div className='words-container'>
                <div>{this.renderFourthWordFirstLetterField()}</div>
                <div>{this.renderFourthWordSecondLetterField()}</div>
                <div>{this.renderFourthWordThirdLetterField()}</div>
                <div>{this.renderFourthWordFourthLetterField()}</div>
                <div>{this.renderFourthWordFifthLetterField()}</div>
            </div>

            <div className='words-container'>
                <div>{this.renderFifthWordFirstLetterField()}</div>
                <div>{this.renderFifthWordSecondLetterField()}</div>
                <div>{this.renderFifthWordThirdLetterField()}</div>
                <div>{this.renderFifthWordFourthLetterField()}</div>
                <div>{this.renderFifthWordFifthLetterField()}</div>
            </div>
            <div className='button-count-container'>
                <button onClick={this.onClickSubmitButton} className='button' type='submit'>Submit</button>
                <p className='attempts'>Attempts: {count}</p>
            </div>
           
        </form>
    )
  }
}

export default Home
