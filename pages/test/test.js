import {useEffect} from 'react';

export default function Test(){
    let validWildCards = ['uuid', 'post', 'comm', 'text'];

    useEffect(() => {

    }, []);

    const renderAnyLinkInMessage = (message, parsedData = {}, currentIndex = 0, result = []) => {
        if (message[currentIndex] === undefined) {
            return result;
        }

        currentIndex = message.indexOf('(');
        if (currentIndex < 0) {
            result.push(message);
            return result;
        }

        result.push(message.slice(0, currentIndex));
        // char is (
        currentIndex += 1;
        while (true) {
            let k = message.slice(currentIndex, currentIndex + 4);
            if (validWildCards.includes(k)) {
                currentIndex += 4;
                if (message[currentIndex] !== ':') { // if the character after wild card is not a colon, try looping through the rest of the message.
                    result.push(<>{message.slice(0, currentIndex)}</>);
                    return renderAnyLinkInMessage(message.slice(currentIndex), parsedData, 0, result);
                }

                currentIndex += 1;
                let indexOfNextColon = message.slice(currentIndex).indexOf(':');
                if (indexOfNextColon < 0) {
                    indexOfNextColon = message.slice(currentIndex).indexOf(')');
                    if (!indexOfNextColon) {
                        result.push(<>{message.slice(0, currentIndex)}</>);
                        return renderAnyLinkInMessage(message.slice(currentIndex), parsedData, 0, result);
                    }

                    parsedData[k] = message.slice(currentIndex, currentIndex + indexOfNextColon);
                    currentIndex += indexOfNextColon + 1;
                    break;
                }

                // parse it.
                parsedData[k] = message.slice(currentIndex, currentIndex + indexOfNextColon);

                currentIndex += indexOfNextColon;
                currentIndex += 1;
            }
        }

        // analyze the parsed data and render based off of it.
        result.push(<a href={`/homepage/${parsedData['post'] ?? ''}${parsedData['comm'] ? '/comment/' + parsedData['comm'] : ''}`}>{parsedData['text'] ?? ''}</a>);
        return renderAnyLinkInMessage(message.slice(currentIndex), {}, 0, result);
    };

    const result = renderAnyLinkInMessage('Our moderator, ilia, allowed your comment to be published. (uuid:testtteststesaffsdf:comm:asdfadsadfad:post:asdfadsfddasf:text:go to comment)');

    console.log(result);
    // console.log(result);

    return (
        <>test {result}</>
    );
}