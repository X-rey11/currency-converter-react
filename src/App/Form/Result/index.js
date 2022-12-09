import "./style.css";

export const Result = ({result}) => (
    <p className="result">
        {!!result && (
            <>
                {result.sourseAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
)