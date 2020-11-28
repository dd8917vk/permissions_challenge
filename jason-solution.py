def perm(permission_string):
    digits = ['']*3
    for i in range(len(permission_string)):
        digits[i//3] += ('0' if permission_string[i] == '-' else '1')
    return "".join(list(map(lambda n: str(int(n,2)), digits)))
