
export function acceptTermsChangeImpl(props) {
    
    props.profile.acceptTerms = props.event.target.checked;

    return props.profile;
}

export function resetClickImpl(props) {

    props.profile.firstName = '';
    props.profile.lastName = '';
    props.profile.birthDate = '';
    props.profile.username = '';
    props.profile.password = '';
    props.profile.confirmPassword = '';
    props.profile.acceptTerms = false;

    props.error.password = '';

    return (props);
}

export function passwordChangeImpl(props) {

    var profileDict = props.profile;
    var errorDict = props.error;

    for (var key in profileDict) {

        if (key === props.event.target.id) {

            profileDict[key] = props.event.target.value;
        }
    }

    if ((profileDict.password !== profileDict.confirmPassword) && (profileDict.confirmPassword !== '')) {

        errorDict.password = 'The password does not match';
    } else {

        errorDict.password = '';
    }

    return ({
        profile: profileDict,
        error: errorDict
    });
}

export function textChangeImpl(props) {

    var profile = props.profile;

    for (var key in profile) {

        if (key === props.event.target.id) {

            profile[key] = props.event.target.value;
        }
    }

    return (profile);
}