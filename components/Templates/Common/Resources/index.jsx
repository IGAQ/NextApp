import LetterSection from '../../../Atoms/Common/LetterSection';
import Image from 'next/image';
import { ABCSelect } from '../../../Atoms/Common/ABCselect';

export function Flags(props) {
    // const { flags } = props;
    return (
        <>
            <ABCSelect />
            Flags
            {/* <div className="flags">
                {flags.map(flags => (
                    <div className="flags" key={flags}>
                        <LetterSection letter={flags.firstLetter} />
                        <flagName>{flags.name}</flagName>
                        <Image src={`https://www.countryflags.io/${flags}/flat/64.png`} alt={flags} />
                    </div>
                ))}
            </div> */}
        </>
    );
}

export function Terms(props) {
    // const { terms } = props;
    return (
        <>
            <ABCSelect />
            Terms
            {/* <div className="terms">
                {terms.map(term => (
                    <div className="term" key={term}>
                        <LetterSection letter={term.firstLetter} />
                        <termName>{term.name}</termName>
                        <termDescription>{term.description}</termDescription>
                    </div>
                ))}
            </div> */}
        </>
    );
}