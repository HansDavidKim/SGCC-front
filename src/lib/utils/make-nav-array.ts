export function makeNavArray(_currentPage: number, _totalPages: number, _navLength: number): number[] {
        let _navArray: number[] = [];
        for (let i = 1; i < _navLength + 1; i++) {
            _navArray.push(
                Math.floor((_currentPage - 1) / _navLength) * _navLength + i,
            );
        }
        _navArray = _navArray.filter((n) => n <= _totalPages);
    return _navArray;
}