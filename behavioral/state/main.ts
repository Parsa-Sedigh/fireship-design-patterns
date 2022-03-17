class Human {
    think(mood) {
        switch (mood) {
            case 'happy': {
                return 'I am happy';
            }
            case 'sad': {
                return 'I am sad';
            }
            default: {
                return 'I am neutral';
            }
        }
    }
}
