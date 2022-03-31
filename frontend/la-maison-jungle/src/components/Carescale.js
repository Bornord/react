
function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={e => alert(scaleValue,careType)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? 
                    <span 
                        key={rangeElem.toString()}
                    >
                        {scaleType}
                    </span> 
                    : 
                    null)}
        </div>
    )
}

function trigger(valeur, type) {
    let gradation;
    const val = type === 'light' ? '☀️' : '💧';
    if (valeur === 1) {
        gradation = 'peu';
    } else if (valeur === 2) {
        gradation = 'moyennement';
    } else {
        gradation = 'beaucoup';
    }
    alert ("En terme de " + val + ":\n" + "Cette plante a " + gradation + "de besoin.");
}



export default CareScale;