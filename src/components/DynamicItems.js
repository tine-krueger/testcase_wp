import PropTypes from 'prop-types'

DynamicItems.propTypes = {
    items: PropTypes.array
}

export default function DynamicItems(items) {

    return(
        
        <>
            <ul>
                {items.items.map((item, index) => <li key={index}>{item[1]}</li>)}
            </ul>
        </>

    )


}