
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

    props.error.firstName = '';
    props.error.lastName = '';
    props.error.birthDate = '';
    props.error.username = '';
    props.error.password = '';
    props.error.confirmPassword = '';

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

        errorDict.confirmPassword = 'The password does not match';
    } else {

        errorDict.confirmPassword = '';
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

export function onSubmitImpl(props) {

    const profile = props.profile;
    var error = props.error;
    var isOk = true;

    if (profile.firstName === '') {
        error.firstName = 'This field is requires.';
        isOk = false;
    }

    if (profile.lastName === '') {
        // error.lastName = 'This field is requires.';
        // isOk = false;
    }

    if (profile.birthDate === '') {
        error.birthDate = 'This field is requires.';
        isOk = false;
    }

    if (profile.username === '') {
        error.username = 'This field is requires.';
        isOk = false;
    }

    if (profile.password === '') {
        error.password = 'This field is requires.';
        isOk = false;
    }

    if (profile.confirmPassword === '') {
        // error.confirmPassword = 'This field is requires.';
        // isOk = false;
    }

    if (!profile.acceptTerms) {
        // error.acceptTerms = 'This field is requires.';
        // isOk = false;
    }

    const dict = {
        error: error,
        isOk: isOk
    };

    return (dict);
}