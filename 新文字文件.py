import requests

def get_user_repositories(username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)

    if response.status_code == 200:
        repositories = response.json()
        return repositories
    else:
        print("Failed to retrieve repositories.")
        return None

def save_repositories_to_file(repositories, filename):
    with open(filename, "w", encoding="utf-8") as file:
        file.write("<html>\n")
        file.write("<head>\n")
        file.write('<link href="style.css" rel="stylesheet" type="text/css">\n')
        file.write("</head>\n")
        file.write("<body>\n")

        for repo in repositories:
            repo_name = repo["name"]
            repo_url = repo["html_url"]
            repo_description = repo["description"]
            repo_stars = repo["stargazers_count"]
            repo_forks = repo["forks_count"]

            file.write('<details class="repo">\n')
            file.write(f'  <summary class="repo-title"><strong>{repo_name}</strong></summary>\n')
            file.write('  <div class="repo-badge">\n')
            file.write(f'    <img src="https://img.shields.io/github/stars/{username}/{repo_name}?style=flat-square" alt="Stars">\n')
            file.write(f'    <img src="https://img.shields.io/github/forks/{username}/{repo_name}?style=flat-square" alt="Forks">\n')
            file.write('  </div>\n')
            file.write(f'  <p class="repo-link"><a href="{repo_url}">{repo_url}</a></p>\n')
            file.write(f'  <p class="repo-description">{repo_description}</p>\n')
            file.write('</details>\n')
            file.write("<br>\n")

        file.write('<footer class="footer">\n')
        file.write('  <p class="footer-text">◎510208 Software World | GitHub Pages</p>\n')
        file.write('</footer>\n')
        file.write("</body>\n")
        file.write("</html>\n")

# 輸入你的 GitHub 使用者名稱
username = "510208"

# 取得使用者的儲存庫
repositories = get_user_repositories(username)

# 如果成功取得儲存庫，則將其輸出到檔案中
if repositories is not None:
    output_filename = "github_repositories.txt"
    save_repositories_to_file(repositories, output_filename)
    print(f"儲存庫已成功輸出到 {output_filename} 檔案中。")
