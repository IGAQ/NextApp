import { Background } from '../../../../styles/globals';
import LetterSection from '../../../Atoms/Common/LetterSection';
import Image from 'next/image';
import { ABCSelect } from '../../../Atoms/Common/ABCselect';

export function Flags(props) {
    const { flags } = props;
    return (
        <Background>
            <ABCSelect />
            Flags
            {/* <div className="flags">
                {flags.map(flag => (
                    <div className="flag" key={flag}>
                        <LetterSection letter={flag.firstLetter} />
                        <flagName>{flag.name}</flagName>
                        <Image src={`https://www.countryflags.io/${flag}/flat/64.png`} alt={flag} />
                    </div>
                ))}
            </div> */}
        </Background>
    );
}

export function Terms(props) {
    const { terms } = props;
    return (
        <Background>
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
        </Background>
    );
}