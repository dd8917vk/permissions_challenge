def perm(permission_string):
    digits = ['']*3
    for i in range(len(permission_string)):
        digits[i//3] += ('0' if permission_string[i] == '-' else '1')
    return "".join(list(map(lambda n: str(int(n,2)), digits)))

print(perm('rwxr-xr-x')) # should = 755
print(perm('r-xr-xr-x')) # should = 555
print(perm('rw-rw-rw-')) # should = 666
print(perm('---------')) # should = 0
