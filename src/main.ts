/*
-*- coding: UTF-8 -*-
Solution of the 2-D Laplace equation
Reference: https://www.ohmsha.co.jp/book/9784274221705/
*/

# -- Main execution part --

u = [[0 for i in range(Nx)] for j in range(Ny)]  # Initialize

for j in range(Ny):
    u[0][j] = math.sin(2 * math.pi * j / (Ny - 1))  # u_0,j = sin(2πj/100)

# Jacobi method
for i in range(lim):
    iteration(u)

# -- Output solution --
# print(u)

f = open("output/output-solution-u.csv", mode="w")
print("x,", "y,", "u", file=f)

for i in range(Nx - 1):
    for j in range(Ny - 1):
        hx = i / 100      # stride length for Nx
        hy = j / 100      # stride length for Ny
        print(hx, ",", hy, ",", u[i][j], file=f)

# Setting the range and interval
x = np.arange(0, Nx)
y = np.arange(0, Ny)

# Mesh drawing settings
X, Y = np.meshgrid(x, y)
U = np.array(u)

fig = plt.figure()
ax = fig.add_subplot(projection="3d")

# Plot
ax.plot_wireframe(X, Y, U)
ax.plot_surface(X, Y, U, cmap = "jet")

# Set axis and title label
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_zlabel("u(x, y)")

ax.set_title("2-D Laplace equation", c="darkred",
            size="large", style="italic")

plt.show()
# End of 2D-laplace.py
