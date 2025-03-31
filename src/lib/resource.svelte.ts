

export let resource = <T>(fn: () => Promise<T>, init: T) => {
    let _rune = $state(init);

    $effect(() => {
        (async () => {
            _rune = await fn();
        })()
    });

    return _rune;
};


